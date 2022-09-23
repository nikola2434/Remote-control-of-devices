import { TypeDispatch, TypeStore } from "../store/redux";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const useTypeDispatch = () => useDispatch<TypeDispatch>();

export const useTypeSelector: TypedUseSelectorHook<TypeStore> = useSelector;
