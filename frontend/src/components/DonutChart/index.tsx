import Chart from 'react-apexcharts'

const DonutChart = () => {

    const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    }

    const options = {
        legend: {
            show: true
        }
    }

    return (
        /* Uma variável com chaves, no React, vai ser incorporada ao JSX. No caso, essa entre chaves é 
       a referencia para a constante de mesmo nome acima.
              Permite usar todas as propriedades do objeto mockData e permite adicionar mais informações*/
        <Chart
            options={{ ...options, labels: mockData.labels }}
            series={mockData.series}
            type="donut"
            height="240"
        />
    );
}

export default DonutChart;