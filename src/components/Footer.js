export default function Footer() {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  return (
    <div className="sticky">
      <section className="footer">Copyright &copy; {currentYear}</section>
    </div>
  );
}
