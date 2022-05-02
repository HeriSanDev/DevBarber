import React, { useEffect, useState } from "react";
import {Container, Scroller, SearchArea, SearchInput, ResultArea,  LoadingIcon} from './styles';

import { RefreshControl } from 'react-native';

import Api from "../../Api";

import BarberItem from "../../components/BarberItem";
import BackButton from "../../components/BackButton";

export default () => {

    const [listBarber, setListBarber] = useState([]);
    const [search, setSearch] = useState('');
    const [refreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(false);

    const getBarbersName = async () => {
        setLoading(true);
        setListBarber([]);

        let res = await Api.getBarbers();
            if(search!=""){
                const filterName = res.data.filter((data) =>{

                    return data.name === search;
                })
                setListBarber(filterName);
            }else{
                setListBarber(res.data);
            }
        setLoading(false);
    }

    const handleSearch = () => {
        getBarbersName();
    }

    const onRefresh = ()=>{
        setRefreshing(false);
        getBarbersName();
    }


    useEffect(()=>{
        getBarbersName();
    },[])



    return(

        <Container>
            <Scroller refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
            }>
                <SearchArea>
                    <SearchInput
                    placeholder="Digite o nome do barbeiro"
                    placeholderTextColor="#FFF"
                    onChangeText = {t=>setSearch(t)}
                    onEndEditing = {handleSearch}
                    />
                </SearchArea>

                {loading && <LoadingIcon size='large' color='#FFF' />}

                <ResultArea>
                {listBarber.map((item, k)=>(
                    <BarberItem key={k} data={item} />
                ))}

                </ResultArea>
            </Scroller>
            <BackButton />
        </Container>
    );

}