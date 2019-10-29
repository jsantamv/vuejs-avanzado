using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Instacredit.ReportesDinamicos.Controllers
{
    public class MantRolController : Controller
    {
        // GET: MantRol
        public ActionResult Index()
        {
            return View();
        }

        /// <summary>   Creates a JSON result with the given data as its content. </summary>
        ///
        /// <remarks>   Jcsantamariav, 2/10/2019. </remarks>
        ///
        /// <param name="data"> The data. </param>
        ///
        /// <returns>   A JSON response stream to send to the ListarRoles action. </returns>
        public JsonResult ListarRoles(Model.Rol data)
        {
            using (var obj = new BL.Mantenimientos.MantenimientoRol())
            {
                var result = obj.ListarRoles(data);

                return Json(new
                {
                    Data = result.Response,
                    result.MensajeInfo,
                    result.Mensaje,
                    result.MensajeEncabezado,
                    result.Status
                }, JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult GuardarRol(Model.Rol rol)
        {
            using (var obj = new BL.Mantenimientos.MantenimientoRol())
            {
                var result = obj.GuardarRol(rol);

                return Json(new
                {
                    Data = result.Response,
                    result.MensajeInfo,
                    result.Mensaje,
                    result.MensajeEncabezado,
                    result.Status
                }, JsonRequestBehavior.AllowGet);
            }
        }
    }
}