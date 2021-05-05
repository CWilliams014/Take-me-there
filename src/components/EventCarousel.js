import React from 'react';

import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { t } from 'react-native-tailwindcss';
import Carousel from 'react-native-snap-carousel';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const EventCarousel = () => {
  return (
    <View style={[t.pY5, styles.container]}>
      <Carousel
        data={courses}
        firstItem={0}
        layout="default"
        sliderWidth={width}
        itemWidth={330}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {}}
            key={item.id}
            style={[t.p4, t[`bg${item.color}`], t.shadow2xl, styles.radius]}
          >
            <View
              style={[
                t.flexRow,
                t.itemsCenter,
                t.justifyCenter,
                t.bgWhite,
                t.w20,
                t.h10,
                t.roundedFull,
                t.mY2,
              ]}
            >
              <Text style={[t.fontM, t.textXl, t.fontBlack]}>{item.rate}</Text>
            </View>

            <Text style={[t.text2xl, t.fontB, t.textWhite, t.mY4]}>
              {item.name}
            </Text>
            <View style={[t.flexRow, t.itemsCenter]}>
              <Image
                style={[t.h20, t.w20, t.roundedFull, t.mR6]}
                source={{
                  uri: item.image,
                }}
              />
              <View>
                <Text style={[t.textBase, t.textWhite, t.fontR, t.mY3]}>
                  Teacher
                </Text>
                <Text style={[t.textXl, t.textWhite, t.fontB]}>
                  {item.teacher}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  radius: {
    borderRadius: 40,
  },
  card: {
    width: (width - 80) / 2,
    margin: 10,
  },
  smallRadius: {
    borderRadius: 20,
  },
  radiusUp: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  radiusDown: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

export const courses = [
  {
    id: 1,
    name: 'UX - UI Design',
    image: 'https://picsum.photos/201',
    teacher: 'Gustavo Kenter',
    rate: 4.9,
    color: 'Accent',
  },
  {
    id: 2,
    name: 'UX - UI Design',
    image: 'https://picsum.photos/200',
    teacher: 'Gustavo Kenter',
    rate: 4.9,
    color: 'Secondary',
  },
  {
    id: 3,
    name: 'UX - UI Design',
    image: 'https://picsum.photos/203',
    teacher: 'Gustavo Kenter',
    rate: 4.9,
    color: 'Primary',
  },
];

export const courses2 = [
  {
    id: 1,
    name: 'Animation in After Efffects',
    image: 'https://picsum.photos/204',
    teacher: 'Tiano Mango',
    rate: 4.9,
    color: '#fedde4',
  },
  {
    id: 2,
    name: 'Mobile App Design',
    image: 'https://picsum.photos/205',
    teacher: 'Dulce Bator',
    rate: 4.9,
    color: '#dddbfb',
  },
  {
    id: 3,
    name: 'Animation in After Effects',
    image: 'https://picsum.photos/206',
    teacher: 'Lincoln Bator',
    rate: 4.9,
    color: '#d2f1f0',
  },
  {
    id: 4,
    name: 'Mobile App Design',
    image: 'https://picsum.photos/207',
    teacher: 'Livia Lubin',
    rate: 4.9,
    color: '#fedde4',
  },
];

export default EventCarousel;
