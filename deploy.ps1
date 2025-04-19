# Build the SAM application
sam build

# If build fails, exit the script
if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed. Exiting..."
    exit $LASTEXITCODE
}

# Deploy the SAM application using samconfig.toml
sam deploy --no-confirm-changeset --no-fail-on-empty-changeset