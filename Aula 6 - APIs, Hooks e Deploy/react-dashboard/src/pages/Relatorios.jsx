import { GraficoBarras } from "@/components/GraficoBarras";
import { GraficoPizza } from "@/components/GraficoPizza";
import { Button } from "@/components/ui/button"

function handleClick(){
  alert("clicou!");
}

export default function Relatorios() {
  return (
    <div className="p-6 flex-1 bg-gray-100">
      <h1 className="text-2xl font-bold">Relatórios</h1>
      <p className="mt-2 text-gray-600">Página de relatórios.</p>
      <Button onClick={handleClick}>Click me</Button>
      <div className="grid grid-cols-3 mt-2">
        <GraficoBarras titulo ="Grafico 1"/>
        <GraficoBarras titulo ="Grafico 2"/>
        <GraficoPizza />
      </div>
    </div>
  );
}
