export const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transform hover:scale-105 active:scale-95 shadow-md hover:shadow-xl";

  const variants = {
    primary:
      "bg-gradient-to-r from-slate-900 to-slate-700 hover:from-slate-800 hover:to-slate-600 text-white dark:from-slate-700 dark:to-slate-900",
    secondary:
      "bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-600 hover:to-blue-400 text-white shadow-blue-500/30",
    outline:
      "border-2 border-slate-300 dark:border-slate-600 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white",
    danger:
      "bg-gradient-to-r from-red-700 to-red-500 hover:from-red-600 hover:to-red-400 text-white shadow-red-500/30",
    custom:
      "bg-gradient-to-r from-sky-700 to-sky-600 hover:from-sky-600 hover:to-sky-500 text-white px-4 py-2 rounded-md text-sm font-medium transition-all shadow-md hover:shadow-lg hover:scale-105",
  };

  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-6 py-2",
    lg: "h-14 px-8 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
