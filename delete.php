<?php
require 'db.php';

if (isset($_GET['id'])) {
    $id = intval($_GET['id']);
    $conn->query("DELETE FROM contacts WHERE id=$id");
}

header("Location: admin_view.php");
exit;
?>
