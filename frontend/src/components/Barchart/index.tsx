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
            categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
        },
        series: [
            {
                name: "% Sucesso",
                data: [43.6, 67.1, 67.7, 45.6, 71.1]
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