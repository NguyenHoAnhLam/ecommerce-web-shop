import React from 'react';
import { Link } from 'react-router-dom';

import Helmet from '../components/Helmet';
import HeroSlider from '../components/HeroSlider';
import Section, { SectionTitle, SectionBody } from '../components/Section';
import PolicyCard from '../components/PolicyCard';
import Grid from '../components/Grid';
import ProductCard from '../components/ProductCard';
import Banner from '../components/Banner';

import heroSliderData from '../assets/fake-data/hero-slider';
import heroBannerData from '../assets/fake-data/hero-banner';
import policy from '../assets/fake-data/policy';
import productData from '../assets/fake-data/products';

function Home() {
    return (
        <Helmet title="Trang chủ">
            <HeroSlider data={heroSliderData} control auto />
            <Section>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={20}>
                        {policy.map((item, index) => (
                            <Link to="/policy" key={index}>
                                <PolicyCard
                                    key={index}
                                    name={item.name}
                                    description={item.description}
                                    icon={item.icon}
                                />
                            </Link>
                        ))}
                    </Grid>
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>Sản phẩm bán chạy</SectionTitle>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={20}>
                        {productData.getProducts(4).map((item, index) => (
                            <ProductCard
                                key={index}
                                img01={String(item.image01)}
                                img02={String(item.image02)}
                                name={item.title}
                                price={Number(item.price)}
                                slug={item.slug}
                            />
                        ))}
                    </Grid>
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>Sản phẩm mới nhất</SectionTitle>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={20}>
                        {productData.getProducts(8).map((item, index) => (
                            <ProductCard
                                key={index}
                                img01={String(item.image01)}
                                img02={String(item.image02)}
                                name={item.title}
                                price={Number(item.price)}
                                slug={item.slug}
                            />
                        ))}
                    </Grid>
                </SectionBody>
            </Section>
            <Section>
                <SectionBody>
                    <Banner data={heroBannerData} control auto />
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>Sản phẩm phổ biến</SectionTitle>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={20}>
                        {productData.getProducts(8).map((item, index) => (
                            <ProductCard
                                key={index}
                                img01={String(item.image01)}
                                img02={String(item.image02)}
                                name={item.title}
                                price={Number(item.price)}
                                slug={item.slug}
                            />
                        ))}
                    </Grid>
                </SectionBody>
            </Section>
        </Helmet>
    );
}

export default Home;
