import Header from "../Header";

export default function PageWrapper({ children }) {
  return (
    <div className="flex flex-col">
      <Header />

      {children}
    </div>
  );
}
