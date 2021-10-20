import Table from '../Table';
import useSWR from 'swr';
import { swGet } from '../../utils/fetcher';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Birth Year',
        dataIndex: 'birth_year',
        key: 'birth_year',
    },
    {
        title: 'Height',
        dataIndex: 'height',
        key: 'height',
        render: (height: string) =>
            parseInt(height)
                ? parseInt(height).toLocaleString('es-AR')
                : height,
    },
    {
        title: '# films',
        dataIndex: 'films',
        key: 'films_count',
        render: (films: string[]) => films.length,
    },
];

function People(){
    const {data,error} = useSWR('/people', swGet)
    if (error) {
        return <div className="px-2">Oh oh!</div>;
    }
    if (!data) {
        return <div className="px-2">Loading...</div>;
    }

    return (<div>
        <Table columns={columns} data={data.results} />
    </div>)
}
export default People;

