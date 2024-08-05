import React from "react";

import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";
import {
  ChakraProvider,
  Box,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

import { Autores } from "../Autores";
import { Editoras } from "../Editoras";
import { Usuarios } from "../Usuarios";
import { Livros } from "../Livros";
import { Header } from "./Header";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  }
});

const App = () => {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Flex w="100%" direction="column" justify="center">
            <Box>
              <Header />
            </Box>
            <Box>
              <Tabs variant="enclosed">
                <TabList>
                  <Tab>Livros</Tab>
                  <Tab>Autores</Tab>
                  <Tab>Editoras</Tab>
                  <Tab>Usuários</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <Livros />
                  </TabPanel>
                  <TabPanel>
                    <Autores />
                  </TabPanel>
                  <TabPanel>
                    <Editoras />
                  </TabPanel>
                  <TabPanel>
                    <Usuarios />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
        </Flex>
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default App;
