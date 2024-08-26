"use client"
import { Getcategories } from "@/Utils/Getcategories";
import { createContext, useContext, useEffect, useState } from "react";


export const DrawerContext = createContext < any > ({});
export const CartContext = createContext < any > ({});
export const Categories = createContext < any > ([]);
export const LangContext = createContext < any > ('en');



 const ContextWrapper  = ({children}:  {
        children: React.ReactNode;
      }
      ) => {
        const [open,
            setOpen] = useState(false);
        const [cartOpen,
            setCartOpen] = useState(false);
            const [categories, setCategories] = useState<any[]>([]);

              

                useEffect(() => {
                    const fetchCategories = async () => {
                        if (!categories || categories.length === 0) {
                            const categoriesData = await Getcategories();
                            
                            if (!categoriesData || categoriesData?.success === false) {
                                return null;
                            }
                            const fetchedCategories = categoriesData?.Categories[0]?.cateArray || [];
                            setCategories(fetchedCategories);
                        }
                    };
                    fetchCategories();
                }, [categories]);
  



            return (
                
                <DrawerContext.Provider value={{open,setOpen}}>
        <Categories.Provider value={{categories, setCategories}}>
            
        <CartContext.Provider value={{cartOpen, setCartOpen}}>

        {/* <SideBar cates={cates}/> */}
                {/* <NextNProgress/> */}
            {/* <QuickCart/> */}
            {children}
   
        </CartContext.Provider>
        </Categories.Provider>
    </DrawerContext.Provider>
            )
        }

export default ContextWrapper

export const useDrawerContext = () => useContext(DrawerContext);
export const useCartContext = () => useContext(CartContext);
export const useLangContext = () => useContext(LangContext);
export const useCategoriesContext = () => useContext(Categories);
