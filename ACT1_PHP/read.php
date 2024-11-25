//Blok1
<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
if ($_SERVER['REQUEST_METHOD']==='OPTIONS'){
    http_response_code(200);
    exit;
}

//Blok 2
require('connection.php');

$response = array();

//Blok 3
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $sql = "SELECT * FROM mahasiswa";
    $result = mysqli_query($koneksi, $sql);

    if (mysqli_num_rows($result) > 0) {
        $data = array();

        while ($row = mysqli_fetch_assoc($result)){
            $item = array(
                "id" => $row['id'],
                "npm" => $row['npm'],
                "nama" => $row['nama'],
                "kelas" => $row['kelas']
            );
            $data[] = $item;
        }

        $response['status'] = 'success';
        $response['data'] = $data;
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Tidak ada data dalam tabel mahasiswa';
    }
} else {
    $response['status'] = 'error';
    $response['message'] = 'Metode HTTP tidak valid';
}

//Blok 4
mysqli_close($koneksi);

echo json_encode($response);
?>