function FileUpload({ files, onFilesChange }) {
  return (
    <div className="file-upload">
      <label className="field" htmlFor="reference-files">
        <span className="field__label">Reference images or sketches</span>
        <input
          id="reference-files"
          className="field__control"
          type="file"
          accept="image/*,.pdf"
          multiple
          onChange={(event) => onFilesChange(Array.from(event.target.files ?? []))}
        />
        <span className="field__hint">Upload mood boards, room photos, measured sketches, or finish inspiration.</span>
      </label>

      {files.length ? (
        <div className="file-upload__list">
          {files.map((file) => (
            <span key={`${file.name}-${file.size}`} className="file-upload__item">
              {file.name}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default FileUpload
