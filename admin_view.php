<?php
require 'db.php';

$result = $conn->query("SELECT * FROM contacts ORDER BY created_at DESC");

echo "<table border='1' cellpadding='10'>
<tr>
<th>ID</th><th>Name</th><th>Email</th><th>Subject</th><th>Message</th><th>Created At</th><th>Actions</th>
</tr>";

while ($row = $result->fetch_assoc()) {
    echo "<tr>
        <td>{$row['id']}</td>
        <td>{$row['name']}</td>
        <td>{$row['email']}</td>
        <td>{$row['subject']}</td>
        <td>{$row['message']}</td>
        <td>{$row['created_at']}</td>
        <td>
            <a href='delete.php?id={$row['id']}'>Delete</a> | 
            <a href='edit.php?id={$row['id']}'>Edit</a>
        </td>
    </tr>";
}
echo "</table>";

$conn->close();
?>
