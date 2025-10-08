import React from 'react';
import { useParams } from 'react-router';
import useAppHook from '../hooks/useAppHook/useAppHook';
import AppStatisticChart from '../Components/AppStatisticChart/AppStatisticChart';

const AppDetails = () => {
    const { id } = useParams();
     const { apps, error, loading } = useAppHook();
    const app = apps.find((app) => app.id === Number(id));

    if (loading) return <p>Loading.......</p>;
    if (error) return <p>Error loading app details.</p>;
    if (!app) return <p>App not found.</p>;

     const { title } = app || {};
    return (
        <div>
            <h1>App Details for App ID: {id}</h1>
            <h2>{title}</h2>
            <AppStatisticChart />
        </div>
    );
};

export default AppDetails;