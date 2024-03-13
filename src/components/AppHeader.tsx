import SearchBox from "./SearchBox";
import AppLogo from "./AppLogo";

function AppHeader() {
  return <div className={"flex justify-between m-4"}>
    <AppLogo/>
    <SearchBox/>
  </div>;
}

export default AppHeader;