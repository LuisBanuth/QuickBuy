using Microsoft.EntityFrameworkCore.Migrations;

namespace QuickBuy.Repositorio.Migrations
{
    public partial class CorrigirCampoEndereco : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "EndececoCompleto",
                table: "Pedido",
                newName: "EnderecoCompleto");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "EnderecoCompleto",
                table: "Pedido",
                newName: "EndececoCompleto");
        }
    }
}
