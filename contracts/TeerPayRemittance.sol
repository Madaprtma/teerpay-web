// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// ============================================================
// TeerPayRemittance.sol
// Cross-border USDC Remittance Contract — Arc Testnet
// By: Teerast | TeerPay Project
// ============================================================
//
// Analogi Trading Bot:
//   sendRemittance()  = place_order()
//   RemittanceSent    = order fill event
//   owner             = risk manager (bisa pause/withdraw)
//   minAmount         = MIN_AMOUNT_USDC di config.py
// ============================================================

interface IERC20 {
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
    function transfer(address to, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
}

contract TeerPayRemittance {

    // --------------------------------------------------------
    // State Variables
    // --------------------------------------------------------

    address public owner;
    IERC20  public usdc;

    uint256 public minAmount = 1e4;     // 0.01 USDC (6 desimal)
    uint256 public maxAmount = 1e8;     // 100 USDC  (6 desimal)
    uint256 public totalVolume;         // Total USDC yang pernah dikirim
    uint256 public totalTxCount;        // Total transaksi

    bool public paused = false;

    // --------------------------------------------------------
    // Events — tersimpan on-chain, terlihat di arcscan.app
    // Analogi: order fill events di exchange
    // --------------------------------------------------------

    event RemittanceSent(
        address indexed sender,
        address indexed recipient,
        uint256 amount,
        string  country,
        string  currency,
        string  memo,
        uint256 timestamp
    );

    event OwnerChanged(address indexed oldOwner, address indexed newOwner);
    event Paused(bool status);

    // --------------------------------------------------------
    // Modifiers
    // --------------------------------------------------------

    modifier onlyOwner() {
        require(msg.sender == owner, "TeerPay: not owner");
        _;
    }

    modifier notPaused() {
        require(!paused, "TeerPay: contract is paused");
        _;
    }

    // --------------------------------------------------------
    // Constructor
    // --------------------------------------------------------

    constructor(address _usdc) {
        owner = msg.sender;
        usdc  = IERC20(_usdc);
    }

    // --------------------------------------------------------
    // CORE FUNCTION: sendRemittance
    // Ini fungsi utama — seperti place_order() di trading bot
    // --------------------------------------------------------

    /**
     * @notice Kirim USDC sebagai remittance ke negara tujuan
     * @param recipient  Address penerima
     * @param amount     Jumlah USDC (dalam 6 desimal, misal 10000 = 0.01 USDC)
     * @param country    Nama negara tujuan (misal "Indonesia")
     * @param currency   Mata uang lokal (misal "IDR")
     * @param memo       Pesan opsional
     */
    function sendRemittance(
        address recipient,
        uint256 amount,
        string calldata country,
        string calldata currency,
        string calldata memo
    ) external notPaused {
        // Validasi input (seperti pre-trade checks di bot)
        require(recipient != address(0), "TeerPay: invalid recipient");
        require(recipient != msg.sender,  "TeerPay: cannot send to self");
        require(amount >= minAmount,      "TeerPay: amount too small");
        require(amount <= maxAmount,      "TeerPay: amount too large");
        require(bytes(country).length > 0, "TeerPay: country required");

        // Transfer USDC dari sender ke recipient langsung
        // Sender harus sudah approve kontrak ini sebelumnya
        bool ok = usdc.transferFrom(msg.sender, recipient, amount);
        require(ok, "TeerPay: USDC transfer failed");

        // Update stats
        totalVolume  += amount;
        totalTxCount += 1;

        // Emit event — ini yang tersimpan on-chain sebagai bukti
        emit RemittanceSent(
            msg.sender,
            recipient,
            amount,
            country,
            currency,
            memo,
            block.timestamp
        );
    }

    // --------------------------------------------------------
    // VIEW FUNCTIONS — baca data tanpa gas
    // --------------------------------------------------------

    /// @notice Cek saldo USDC yang ada di kontrak ini
    function contractBalance() external view returns (uint256) {
        return usdc.balanceOf(address(this));
    }

    /// @notice Statistik bot
    function getStats() external view returns (
        uint256 _totalVolume,
        uint256 _totalTxCount,
        uint256 _minAmount,
        uint256 _maxAmount,
        bool    _paused
    ) {
        return (totalVolume, totalTxCount, minAmount, maxAmount, paused);
    }

    // --------------------------------------------------------
    // ADMIN FUNCTIONS — hanya owner (risk management)
    // --------------------------------------------------------

    /// @notice Pause/unpause kontrak (emergency stop)
    /// Analogi: kill switch di trading bot
    function setPaused(bool _paused) external onlyOwner {
        paused = _paused;
        emit Paused(_paused);
    }

    /// @notice Update batas minimum amount
    function setMinAmount(uint256 _min) external onlyOwner {
        require(_min > 0, "TeerPay: min must be > 0");
        minAmount = _min;
    }

    /// @notice Update batas maximum amount
    function setMaxAmount(uint256 _max) external onlyOwner {
        require(_max > minAmount, "TeerPay: max must be > min");
        maxAmount = _max;
    }

    /// @notice Transfer ownership
    function transferOwnership(address newOwner) external onlyOwner {
        require(newOwner != address(0), "TeerPay: invalid address");
        emit OwnerChanged(owner, newOwner);
        owner = newOwner;
    }
}
