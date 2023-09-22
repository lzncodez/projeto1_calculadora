//criando a classe da calculadora
class Calculator{
    constructor(){
        //aqui é a propriedade que receberá os valores digitados
        this.displayValue = " ";
    }
    appendToDisplay(value) {
        this.displayValue += value;
        this.updateDisplay();
    }
    updateDisplay(){
        document.getElementById("displayContent").value = this.displayValue;
    }
    clearDisplay(){
        this.displayValue = " ";
        this.updateDisplay();
    }
    calculate(){
        try{
        const result = math.evaluate(this.displayValue);
        this.displayValue = result.toString();
        this.updateDisplay();
    } catch (error) {
        this.displayValue = "Erro"
        this.updateDisplay();
    }

    }
}
//Criando o objeto da calculadora
//objeto chamado calc
const calc = new Calculator();