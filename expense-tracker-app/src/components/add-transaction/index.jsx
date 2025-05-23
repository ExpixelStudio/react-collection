import { useContext } from "react";
import { GlobalContext } from "@/context";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  Radio,
  Button,
} from "@chakra-ui/react";

export default function TransactionForm({ onClose, isOpen }) {
  const { formData, setFormData, value, setValue } = useContext(GlobalContext);

  function handleFormChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Transaction</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Enter Description</FormLabel>
              <Input
                placeholder="Enter Transaction Description"
                name="description"
                type="text"
                onChange={handleFormChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Enter Amount</FormLabel>
              <Input
                placeholder="Enter Transaction Amount"
                name="amount"
                type="number"
                onChange={handleFormChange}
              />
            </FormControl>

            <RadioGroup mt="5" value="value" onChange={setValue}>
              <Radio
                checked={formData.type === "income"}
                value="income"
                colorScheme="blue"
                name="type"
              >
                Income
              </Radio>
              <Radio
                checked={formData.type === "income"}
                value="expense"
                colorScheme="red"
                name="type"
              >
                Expense
              </Radio>
            </RadioGroup>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} mr={"4"}>
              Cancle
            </Button>
            <Button onClick={onClose} type="submit">Add</Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
}
