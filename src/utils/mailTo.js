export const mailTo = () => {

  const handleClick = (e) => {
    e.preventDefault()
    const recipient = 'elautaropintos@gmail.com'
    const subject = encodeURIComponent('Contact About LoginApp: - [Your App]');
    const body = encodeURIComponent('Message content here.');
    const recruiterEmail = '';
  
    const mailtoLink = `mailto:${recipient}?cc=${recruiterEmail}&subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    handleClick
  )
}