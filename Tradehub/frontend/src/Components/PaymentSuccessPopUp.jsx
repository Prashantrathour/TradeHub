import { useEffect, useState } from 'react';
import { Button, Box, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, useDisclosure } from '@chakra-ui/react';
import { motion } from 'framer-motion';


// Import the image
const successImage='https://cdn3d.iconscout.com/3d/premium/thumb/man-making-successful-payment-2937678-2426378.png';

const SuccessPopup = ({ paymentStatus, setPaymentStatus }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (paymentStatus) {
      setShowSuccess(true);
      onOpen();
      // Reset the payment status after displaying the success popup
      setPaymentStatus(false);
    }
  }, [paymentStatus, onOpen, setPaymentStatus]);

  const handleClose = () => {
    setShowSuccess(false);
    onClose();
  };

  return (
    <Box>
   

      <Modal isOpen={isOpen} onClose={handleClose} isCentered motionPreset="scale">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Payment Successful</ModalHeader>
          <ModalBody>
            {showSuccess && (
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                <img src={successImage} alt="Success" width="300" height="300" />
               
                <p>You have purchased stock successfully.</p>
              </motion.div>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default SuccessPopup;
