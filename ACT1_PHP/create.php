// Blok1
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
header('Content-Type: application/json');
require('connection.php');

$response = array();

//Blok 3
if ($_SERVER['REQUEST_METHOD']==='POST'){
    $npm = $_POST['npm'];
    $nama = $_POST['nama'];
    $kelas = $_POST['kelas'];

    $sql = "INSERT INTO mahasiswa (nama, npm, kelas) VALUES ('$nama', '$npm', '$kelas')";

    //Blok 4
    if (mysqli_query($koneksi, $sql)) {
        $response['status'] = 'success';
        $response['message'] = 'Data berhasil ditambahkan.';
    }else{
        $response['status'] = 'error';
        $response['message'] = 'Error: ' .$sql . '<br>' . mysqli_error($koneksi);
    }
}


//Blok 5
mysqli_close($koneksi);

echo json_encode($response);
?>
