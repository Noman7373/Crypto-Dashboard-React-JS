import { Grid, GridItem } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import Currentprice from "./components/Currentprice";
import PortfolioSection from "./components/PortfolioSection";
import Transactions from "./components/Transactions";

const Dashboard = () => {
  return (
    <>
      <DashboardLayout title="Dashboard">
        <Grid
          gridTemplateColumns={{
            base: "repeat (1, 1fr)",
            md: "repeat (2, 1fr)",
          }}
          gap="6"
        >
          <GridItem colSpan={2}>
            <PortfolioSection />
          </GridItem>
          <GridItem colSpan={1}>
            <Currentprice />
          </GridItem>
          <GridItem colSpan={1}>
            <Transactions />
          </GridItem>
        </Grid>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
