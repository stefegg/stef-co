const PageWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="px-4 md:px-16 pt-4">{children}</div>;
};

export default PageWrapper;
