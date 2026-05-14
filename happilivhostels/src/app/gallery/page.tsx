import Banner from "./Components/Banner";
import GalleryList from "./Components/GalleryList";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery - HappiLiv Hostel Photos',
  description: 'Explore our photo gallery showcasing rooms, common areas, and amenities at HappiLiv hostels. See what our guests enjoy.',
};

export default function Gallery() {
    return (
        <>
            <Banner />
            <GalleryList />
        </>
    );
}