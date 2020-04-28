using Microsoft.EntityFrameworkCore;
using QuickBuy.Dominio.Entidades;
using QuickBuy.Dominio.ObjetosDeValor;
using QuickBuy.Repositorio.Config;

namespace QuickBuy.Repositorio.Contexto
{
    public class QuickBuyContexto : DbContext
    {


        public DbSet<Usuario> Usuários { get; set; }
        public DbSet<Pedido> Pedido { get; set; }
        public DbSet<Produto> Produto { get; set; }
        public DbSet<ItemPedido> ItemPedido { get; set; }
        public DbSet<FormaPagamento> FormaPagamento { get; set; }

        public QuickBuyContexto(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new UsuarioConfiguration());
            modelBuilder.ApplyConfiguration(new PedidoConfiguration());
            modelBuilder.ApplyConfiguration(new ProdutoConfiguration());
            modelBuilder.ApplyConfiguration(new ItemPedidoConfiguration());
            modelBuilder.ApplyConfiguration(new FormaPagamentoConfiguration());

            modelBuilder.Entity<FormaPagamento>().HasData(
                    new FormaPagamento()
                    {
                        Id = 1, Nome = "Boleto", Descricao = "Pagamento por boleto"
                    },
                    new FormaPagamento()
                    {
                        Id = 2, Nome = "Cartão de Crédito", Descricao = "Pagamento por Cartão de Crédito"
                    },
                    new FormaPagamento()
                    {
                        Id = 3, Nome = "Dépósito", Descricao = "Pagamento por Dépósito"
                    }
                );

            base.OnModelCreating(modelBuilder);
        }
    }
}
