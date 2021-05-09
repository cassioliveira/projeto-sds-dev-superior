import Chart from 'react-apexcharts'

const Barchart = () => {

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };

    const mockData = {
        labels: {
            categories: ['Jessica Jones', 'Naruto', 'Goku', 'Mario', 'Sonic']
        },
        series: [
            {
                name: "% Sucesso",
                data: [42.6, 27.1, 87.7, 45.6, 11.1]
            }
        ]
    };

    return (
        <Chart
            /* Uma variável com chaves, no React, vai ser incorporada ao JSX. No caso, essa entre chaves é 
            a referencia para a constante de mesmo nome acima.
            Permite usar todas as propriedades do objeto mockData e permite adicionar mais informações*/
            options={{ ...options, xaxis: mockData.labels }}
            series={mockData.series}
            type="bar"
            height="240"
        />
    );
}

export default Barchart;