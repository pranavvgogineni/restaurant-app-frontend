import tw from "tailwind-styled-components";

export function Footer() {
  const FooterParagraph = tw.div`
    text-green-500 
  `;
  return (
    <footer>
      <FooterParagraph>Copyright 2023</FooterParagraph>
    </footer>
  );
}
