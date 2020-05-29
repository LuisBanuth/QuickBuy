using Microsoft.EntityFrameworkCore.Migrations;

namespace QuickBuy.Repositorio.Migrations
{
    public partial class CorrecaoNomeTabelaUsuarios : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Pedido_Usuários_UsuarioId",
                table: "Pedido");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Usuários",
                table: "Usuários");

            migrationBuilder.RenameTable(
                name: "Usuários",
                newName: "Usuarios");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Usuarios",
                table: "Usuarios",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Pedido_Usuarios_UsuarioId",
                table: "Pedido",
                column: "UsuarioId",
                principalTable: "Usuarios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Pedido_Usuarios_UsuarioId",
                table: "Pedido");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Usuarios",
                table: "Usuarios");

            migrationBuilder.RenameTable(
                name: "Usuarios",
                newName: "Usuários");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Usuários",
                table: "Usuários",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Pedido_Usuários_UsuarioId",
                table: "Pedido",
                column: "UsuarioId",
                principalTable: "Usuários",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
