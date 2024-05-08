import { Routes as Ro, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import Petition from '../Pages/Petition';

type RouteProps = {
    homePath: string;
    petitionPath: string;
}

export const Routes = ({ homePath, petitionPath }: RouteProps) => {
    return (
        <>
            <Ro>
                <Route path={homePath} element={<HomePage />} />
                <Route path={petitionPath} element={<Petition />} />
            </Ro>
        </>
    );
};

