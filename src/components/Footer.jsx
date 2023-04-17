export default function Footer() {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  return (
    <>
      <section className="footer">Copyright &copy; {currentYear}</section>
    </>
  );
}
