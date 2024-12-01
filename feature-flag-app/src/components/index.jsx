import { useContext } from "react"
import { FeatureFlagContext } from "./context"
import TicTacToe from "./TicTacToe";
import Accordion from './Accordian';
import RandomColor from './RandomColor';

export default function FeatureFlags(){

   const {loading, enabledFlags} = useContext(FeatureFlagContext);

   const componentsToRender = [
      /* {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    }, */
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showAccordian",
      component: <Accordion />,
    },
    /* {
      key: "showTreeView",
      component: <TreeView  menus={menus} />,
    },
    {
        key : 'showTabs',
        component : <TabTest/>
      } */
   ]

   function checkEnabledFlags(getCurrentKey){
      return enabledFlags[getCurrentKey];
   }

   if (loading) return <h1>Loading data ! Please wait.</h1>

   return (
      <div> 
         <h1>Feature Flags</h1>
         {
            componentsToRender.map(componentItem => checkEnabledFlags(componentItem.key) ? componentItem.component : null)
         }
      </div>
   )

}