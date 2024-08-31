import { Grid, GridItem } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import Currentprice from "./components/Currentprice";
import PortfolioSection from "./components/PortfolioSection";
import Transactions from "./components/Transactions";
import Infocard from "./components/Infocard";

const Dashboard = () => {
  return (
    <>
      <DashboardLayout title="Dashboard">
        <Grid
          gridTemplateColumns={{
            base: "repeat (1, 1fr)",
            xl: "repeat (2, 1fr)",
          }}
          gap="6"
        >
          <GridItem
            colSpan={{
              base: "1",
              xl: "2",
            }}
          >
            <PortfolioSection />
          </GridItem>
          <GridItem colSpan={1}>
            <Currentprice />
          </GridItem>
          <GridItem colSpan={1}>
            <Transactions />
          </GridItem>
          <GridItem colSpan={1}>
            <Infocard
              imgUrl="/Shapes.svg"
              text="Learn more about loan keep your Bitcoins, access it's value without selling it"
              tagText="Loan"
              inverted={false}
            />
          </GridItem>
          <GridItem colSpan={1}>
            <Infocard
              imgUrl="/bg2.svg"
              text="Learn more about our real estate, mortgage, and corporate account services"
              tagText="Contact"
              inverted={true}
            />
          </GridItem>
        </Grid>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
