async function pickerDirectoryImage() {
  const directory = await showDirectoryPicker();
  const files = [];
  for await (const [name, handle] of directory.entries()) {
    if (handle.kind === "file") {
      const file = await handle.getFile();
      if (file.type.startsWith("image/")) {
        files.push(file);
      }
    }
  }
  return files;
}
