import { Box } from '@chakra-ui/react';

const Footer = () => {
  const todaysDate = new Date();
  const currentYear = todaysDate.getFullYear();
  return (
    <Box as="footer">
      <div>
        <div>
          <span>&copy; {currentYear} LDI</span>
        </div>
      </div>
    </Box>
  );
};

export default Footer;
