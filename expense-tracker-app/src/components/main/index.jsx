import { Flex, Heading, Button} from "@chakra-ui/react";
import ExpenseView from "../expense-view";
import Summary from "../summary";

export default function Main() {
  return (
     <Flex textAlign={'center'} flexDirection={'column'} pr={'5'} pl={'5'} >
        <Flex alignItems = {'center'} justifyContent={'space-between'} mt={'12'}>
          <Heading color ={'blue.400'} display={['none', 'block', 'block']}>
            Expense Tracker
          </Heading>

        <Flex alignItems={'center'}>
          <Button 
          bg={'blue.400'}
          color={'black'}
          ml={'4'}
          >  
            Add New Transaction
          </Button>  
        </Flex>
        </Flex>
        <Summary/>
        <Flex>
          <ExpenseView/>  
          
        </Flex>
     </Flex>
  );
};
