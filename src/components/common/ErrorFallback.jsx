function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className="mt-6 grid place-items-center">
      This was an error fetching the Images
      <pre className="">{error.message}</pre>
      <button
        type="button"
        className="mt-5 rounded-2xl bg-red-500 p-3 text-xl font-medium text-white hover:bg-red-700"
        onClick={resetErrorBoundary}
      >
        Try Again
      </button>
    </div>
  );
}

export default ErrorFallback;
