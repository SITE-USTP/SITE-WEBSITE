$status = git status --porcelain
foreach ($line in $status) {
    if ([string]::IsNullOrWhiteSpace($line)) { continue }
    
    $file = $line.Substring(3).Trim()
    # Handle quoted filenames
    if ($file.StartsWith('"') -and $file.EndsWith('"')) {
        $file = $file.Substring(1, $file.Length - 2)
    }
    
    # Skip if file is directory (shouldn't happen with porcelain but good safety)
    if (Test-Path "$file" -PathType Container) { continue }

    Write-Host "Processing $file..."
    git add "$file"
    
    $action = "Add"
    if ($line.StartsWith(" M")) { $action = "Update" }
    
    git commit -m "$action $file"
}
git push
