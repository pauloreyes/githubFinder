export default function Footer() {
	const footerYear = new Date().getFullYear();

	return (
		<div className='footer p-4 bg-gray-700 text-primary-content footer-center'>
			<div>Copyright &copy; {footerYear} All Rights Reserved.</div>
		</div>
	);
}
