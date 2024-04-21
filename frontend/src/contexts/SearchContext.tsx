import { createContext, useContext, useState } from "react";

type SearchContextType = {
    destination: string;
    checkIn: Date;
    checkOut: Date;
    adultCount: number;
    childCount: number;
    hotelId: string;
    saveSearchValues: (
        destination: string,
        checkIn: Date,
        checkOut: Date,
        adultCount: number,
        childCount: number
    ) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

type SearchContextProviderProps = {
    children: React.ReactNode;
};

export const SearchContextProvider = ({ children }: SearchContextProviderProps) => {
    const [destination, setDestination] = useState<string>("");
    const [checkIn, setCheckIn] = useState<Date>(new Date());
    const [checkOut, setCheckOut] = useState<Date>(new Date());
    const [adultCount, setAdultCount] = useState<number>(1);
    const [childCount, setChildCount] = useState<number>(0);
    const [hotelId, setHotelId] = useState<string>("");

    const saveSearchValues = (
        destination: string,
        checkIn: Date,
        checkOut: Date,
        adultCount: number,
        childCount: number,
        hotelId?: string
    ) => {
        setDestination(destination);
        setCheckIn(checkIn);
        setCheckOut(checkOut);
        setAdultCount(adultCount);
        setChildCount(childCount);
        if (hotelId) {
            setHotelId(hotelId);
        }

        // sessionStorage.setItem("destination", destination);
        // sessionStorage.setItem("checkIn", checkIn.toISOString());
        // sessionStorage.setItem("checkOut", checkOut.toISOString());
        // sessionStorage.setItem("adultCount", adultCount.toString());
        // sessionStorage.setItem("childCount", childCount.toString());

        // if (hotelId) {
        //   sessionStorage.setItem("hotelId", hotelId);
        // }
    };
    return (
        <SearchContext.Provider value=
            {
                {
                    destination,
                    checkIn,
                    checkOut,
                    adultCount,
                    childCount,
                    saveSearchValues,
                    hotelId
                }
            }
        >
            {children}
        </SearchContext.Provider>
    );
}

export const useSearchContext = () => {
    const context = useContext(SearchContext);
    return context as SearchContextType;
};