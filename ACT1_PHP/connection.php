<?php

$server = "localhost";
$username = "root"; // Sesuaikan dengan user database Anda
$password = ""; // Sesuaikan dengan password database Anda
$database = "act1"; // Nama database Anda

$koneksi = mysqli_connect($server, $username, $password, $database);

if (!$koneksi) {
    die("Koneksi gagal: " . mysqli_connect_error());
}
?>
