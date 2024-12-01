import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

import featureFlagDataServiceCalll from '../data';

export const FeatureFlagContext = createContext(null);

export default function FeatureFlagGlobalState({children}) {

   const [loading, setLoading] = useState(false);
   const [enabledFlags, setEnabledFlags] = useState({});

   async function fetchFeatureFlags()
   {
      try {

         setLoading(true);
         //original service call
         const response = await featureFlagDataServiceCalll();
         setEnabledFlags(response);
         console.log(response);
         setLoading(false);

      } catch (error) {
         console.log(error);
         throw new Error(error)
         setLoading(false);
      }
   }

   useEffect(()=>{
      fetchFeatureFlags();
   },[])

   return (
      <FeatureFlagContext.Provider value={{loading, enabledFlags}}>
         {children}
      </FeatureFlagContext.Provider>

   )
}