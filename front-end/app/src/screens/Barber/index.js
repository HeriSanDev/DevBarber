import React, {useState, useEffect, useContext} from "react";
import{ useNavigation, useRoute} from "@react-navigation/native";
import Swiper from "react-native-swiper";

import Stars from "../../components/Stars";
import BarberModal from "../../components/BarberModal";
import BackButtom from "../../components/BackButton";

import FavoriteIcon from "../../assets/favorite.svg";
import FavoriteFullIcon from "../../assets/favorite_full.svg";
import BackIcon from "../../assets/back.svg";
import NavPrevIcon from "../../assets/nav_prev.svg";
import NavNextIcon from "../../assets/nav_next.svg";

import { UserContext} from '../../contexts/UserContext';

import {Container,
        Scroller,

        SwipeDot,
        SwipeDotActive,
        SwipeItem,
        SwipeImage,
        FakeSwiper,
        
        PageBody,
        LoadingIcon,

        UserInfoArea,
        UserAvatar,
        UserInfo,
        UserInfoName,
        UserFavButton,


        ServiceArea,
        ServicesTitle,
        ServiceItem,
        ServiceInfo,
        ServiceName,
        ServicePrice,
        ServiceChooseButton,
        ServiceChooseBtnText,

        TestimonialArea,
        TestimonialItem,
        TestimonialInfo,
        TestimonialName,
        TestimonialBody

        
        } from "./styles";

import Api from "../../Api";        


export default ()=>{

    const {dispatch: userDispatch} = useContext(UserContext);

    const navigation = useNavigation();
    const route = useRoute();

    const[userInfo, setUserInfo] = useState({
        id: route.params.id,
        avatar: route.params.avatar,
        name: route.params.name,
        stars: route.params.stars
    });

    const [loading, setLoading] = useState(true);
    const [favorited, setFavorited] = useState(false);
    const [selectedSevice, setSelectedSevice] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(()=>{
        const getBarberInfo = async () =>{
            let json = await Api.getBarber(userInfo.id);
            console.log(json.data);
            console.log(json.data.available);
            console.log(json.data.photos);
            console.log(json.data.testimonials);
            console.log(json.data.services);

            if(json.error == ''){
                setUserInfo(json.data);
                setFavorited(json.data.favorited);
            }else{
                alert("Erro: "+json.error);
            }
            setLoading(false);
        }
        getBarberInfo();

    }, []);


    const handleFavClick = () => {
        setFavorited(!favorited);
        Api.setFavorite(userInfo.id);
        
    }

    const handleServiceChoose = (key)  =>{
        setSelectedSevice(key);
        setShowModal(true);
    }

    return (
        <Container>
            <Scroller>
            {userInfo.photos && userInfo.photos.length > 0 ?
                <Swiper
                    style={{height: 240}}
                    dot={<SwipeDot/>}
                    activeDot={<SwipeDotActive/>}
                    paginationStyle={{top: 15, right: 15, bottom: null, left: null}}
                    autoplay={true}
                >
                    {userInfo.photos.map((item, key) => (
                        <SwipeItem key={key}>
                            <SwipeImage source={{uri: item.url}} resizeMode="cover"/>
                        </SwipeItem>))}
                </Swiper>
                : 
                <FakeSwiper></FakeSwiper>
                }
                <PageBody>
                    <UserInfoArea>
                        <UserAvatar  source ={{uri: userInfo.avatar}} />
                        <UserInfo>
                            <UserInfoName>{userInfo.name}</UserInfoName>
                            <Stars stars= {userInfo.stars} showNumber={true} />
                        </UserInfo>
                        <UserFavButton onPress={handleFavClick}>
                            {favorited?
                             <FavoriteFullIcon width="24" height="24" fill="#FF0000"/>
                            :<FavoriteIcon width="24" height="24" fill="#FF0000"/>}
                        </UserFavButton>
                    </UserInfoArea>

                    {loading && <LoadingIcon size="large" color="#000000"/>}

                    {userInfo.services && 
                    <ServiceArea>
                        <ServicesTitle>Lista de serviços</ServicesTitle>

                        {userInfo.services.map((item, key)=>(
                            <ServiceItem key ={key}>
                                <ServiceInfo>
                                    <ServiceName>{item.name}</ServiceName>
                                    <ServicePrice>R$ {item.price.toFixed(2)}</ServicePrice>
                                </ServiceInfo>
                                <ServiceChooseButton onPress={()=>handleServiceChoose(key)}>
                                    <ServiceChooseBtnText>Agendar</ServiceChooseBtnText>
                                </ServiceChooseButton>

                            </ServiceItem>
                        ))}

                    </ServiceArea>}

                    {userInfo.testimonials && userInfo.testimonials.length > 0 &&
                    <TestimonialArea>
                        <Swiper
                            style={{height: 110}}
                            showsPagination={false}
                            showsButtons={true}
                            prevButton={<NavPrevIcon width="35" height="35" fill="#000000"/>}
                            nextButton={<NavNextIcon width="35" height="35" fill="#000000"/>}
                        >
                            
                             {userInfo.testimonials.map((item, key) =>(
                                    <TestimonialItem key={key}>
                                        <TestimonialInfo>
                                            <TestimonialName>{item.name}</TestimonialName>
                                            <Stars stars={item.rate} showNumber={false}/>
                                        </TestimonialInfo>
                                        <TestimonialBody>{item.body}</TestimonialBody>
                                    </TestimonialItem>
                             ))}   
                        </Swiper>
                    </TestimonialArea>
                    }
                </PageBody>
            </Scroller>
            <BackButtom/>
                
            
            <BarberModal 
                show={showModal}
                setShow={setShowModal}
                user={userInfo}
                service={selectedSevice}
            />

        </Container>
    );
}