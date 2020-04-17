﻿namespace QuickBuy.Dominio.Entidades
{
    public class ItemPedido : Entidade
    {
        public int Id { get; set; }
        public int ProdutoId { get; set; }
        public int Quantidade { get; set; }

        public override void Validate()
        {
            if (ProdutoId == 0)
                AdicionarCritica("Crítica! Id do produto não pode ser zero.");
            if (Quantidade == 0)
                AdicionarCritica("Crítica! Quantidade não pode ser zero.");

        }
    }
}
