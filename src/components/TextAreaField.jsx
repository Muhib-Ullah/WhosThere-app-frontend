const TextAreaField = ({ label, error, rows = 5, placeholder, ...props }) => {
  return (
    <div className="mt-4">
      <label className="block text-sm/6 font-google-sans text-primary">{label}</label>
      <div className="mt-2">
        <textarea
          rows={rows}
          placeholder={placeholder}
          {...props}
          className="font-google-sans block w-full rounded-sm bg-white px-3 py-2 text-base outline-1 -outline-offset-1 outline-gray-300
            transition duration-200 ease-in-out focus:outline-1 focus:outline-primary placeholder:text-gray-400 sm:text-sm/6 resize-none"
        />
      </div>
      {error && <p className="font-google-sans mt-1.5 text-xs text-red-700 text-justify">{error.message}</p>}
    </div>
  );
};

export default TextAreaField;