import "./index.css";

import Layout from "../../components/layout";
import React, { useState, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa"; // Font Awesome phone icon (React Icons)
import { FaStar } from "react-icons/fa";
import helpstar from "../../Assets/images/helpstar.webp";
import Leadership from "../../components/Leadership/index";
import helpcontecticon from "../../Assets/images/helpcontecticon.webp";
import HeroSection from "../../components/herosection";
import drivingchangecard1 from "../../Assets/images/drivingchangecard1.webp";
import drivingchangecard2 from "../../Assets/images/drivingchangecard2.webp";
import LogoIcon from "../../Assets/images/privacy-logo.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from "../../components/contact";
import Sponsor from "../../components/sponsor";

import gethelpbg from "../../Assets/images/gethelpbg.webp";
// import program1 from "../../Assets/images/program1.webp.webp";
// import program2 from "../../Assets/images/program2.webp";

import ourworkbg from "../../Assets/images/ourworkbg.webp";

import { useGet, usePost } from "../Api/usePost";
import AOS from "aos";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import ReactHelmet from "../../components/ReactHelmet";

function PrivacyNotice() {
  const {
    ApiData: ApiDataGetmembers,
    loading: loadingGet,
    error: errorGet,
    get: getdatamembers,
  } = useGet("/member");
  const {
    ApiData: ApiDataotp,
    loading: loadingotp,
    error: errorotp,
    post: postotp,
  } = usePost("/submit-query");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataMethod = new FormData();
    for (const key in formState) {
      formDataMethod.append(key, formState[key]);
    }

    postotp(formDataMethod);
  };

  const [formState, setFormState] = useState({});

  useEffect(() => {
    if (ApiDataotp?.status === true) {
      toast.success(ApiDataotp?.message);
      // Reset all fields in formState to empty strings
      setFormState({
        name: "",
        email: "",
        phone: "",
        message: "",
        info: "",
      });
    } else {
      toast.error(ApiDataotp?.message); // Use error notification for failure
    }
  }, [ApiDataotp]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    getdatamembers();

    document.title = "Privacy Notice - HIS OC " || "HOME- HIS OC";
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        type="button"
        className="slick-arrow slick-prev mb-2 "
        onClick={onClick}
      >
        <span className="arrow-icon">
          {" "}
          <i className="fa fa-arrow-left" aria-hidden="true"></i>
        </span>
      </button>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        type="button"
        className="slick-arrow slick-next mb-2"
        onClick={onClick}
      >
        <span className="arrow-icon">
          {" "}
          <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </span>
      </button>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1200, // Large screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992, // Medium screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Small screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const teamMembers = [
    {
      name: "Christine Stellino",
      title: "Executive Director",
      imgSrc: drivingchangecard1, // replace with actual image paths
    },
    {
      name: "Libby Shroeder",
      title: "Chairmen",
      imgSrc: drivingchangecard2,
    },
    {
      name: "Barbara Buckley",
      title: "Vice Chairmen",
      imgSrc: drivingchangecard1,
    },
    {
      name: "Julie Suchard",
      title: "Treasurer",
      imgSrc: drivingchangecard2,
    },
  ];

  const services = [
    {
      animation: "fade-right",
      description: "Transitional Housing Program for families",
      extension: "1009",
      bgColor: "#E9E5FC", // Light purple background
    },
    {
      animation: "fade-up",
      description: "Young Adults Ages 18-24 yr old men",
      extension: "1007",
      bgColor: "#D7FBE8", // Light green background
    },
    {
      animation: "fade-down",
      description:
        "HomeShare OC If you are a college student, fill out the Student Interest Form to get started.",
      extension: "1005",
      bgColor: "#D3F4FD", // Light blue background
      linkText: "Student Interest Form", // Link text within the description
      linkHref: "#", // Placeholder for link URL
    },
    {
      animation: "fade-left",
      description: "Housing Connection Program for anyone",
      extension: "1019",
      bgColor: "#FFF8D5", // Light yellow background
    },
  ];
  const [hoveredProgram, setHoveredProgram] = useState(null);

  return (
    <>
      <ReactHelmet />
      <Layout>
        <HeroSection
          heroimg={gethelpbg}
          pagetitle="Privacy  "
          pagename="Privacy Notice"
          title2="Notice"
          programprojectsubttle="givedonationsubtitle"
          programpojectaboutherounderline="hopeunderline"
        />

        <section className="info-section d-flex justify-content-center align-items-center py-5">
          <div className="container gethelpgradbg">
            <div className="text-center mb-3">
              <img src={LogoIcon} className="privacy-logo" alt="privacy logo" />
              {/* <p className="text-primary fs-1 fw-bold">Privacy Notice</p> */}
              <p className="fw-bold">
                Orange County Continuum of Care Homeless Management Information
                System (OC HMIS)
              </p>
              <div className="border border-dark p-2">
                <p className="fw-bold lh-lg">
                  THIS PRIVACY NOTICE EXPLAINS UNDER WHAT CIRCUMSTANCES WE MAY
                  SHARE AND DISCLOSE YOUR INFORMATION FROM THE OC HMIS. THIS
                  NOTICE ALSO EXPLAINS YOUR RIGHTS REGARDING YOUR CONFIDENTIAL
                  INFORMATION.
                </p>
                <p
                  className="text-danger mb-0 fw-bold"
                  // style={{ textDecoration: "underline" }}
                >
                  PLEASE READ IT CAREFULLY.
                </p>
              </div>
            </div>
            <p>
              Our organization collects and shares information about individuals
              who access our services. The information is confidentially stored
              in a local electronic database called the Orange County Homeless
              Management Information System (OC HMIS). The OC HMIS securely
              records information (data) about persons accessing housing and
              homeless services in Orange County.
            </p>
            <p>
              Confidential personal information that we collect about you and
              your family is referred to as Protected Personal Information
              (PPI). We are required to protect the privacy of your PPI by
              complying with the privacy practices described in this Privacy
              Notice.
            </p>
            <p className="fw-bold mt-3">Why We Collect and Share Information</p>
            <p>
              The information we collect and share in the HMIS helps us to
              efficiently coordinate the most effective services for you and
              your family. It allows us to complete one universal intake per
              person; better understand homelessness in your community; and
              assess the types of resources needed in your local area.
            </p>
            <p className="mt-3">
              By collecting your information for HMIS, we are also able to
              generate aggregate statistical reports requested by the Department
              of Housing and Urban Development (HUD).
            </p>
            <p className="fw-bold mt-3">
              The Type of Information We Collect and Share in the HMIS
            </p>
            <p>
              We collect and share both PPI and general information obtained
              during your intake and assessment, which may include but is not
              limited to:
            </p>
            <ul>
              <li>Name and contact information</li>
              <li>Social security number</li>
              <li>Birthdate</li>
              <li>Demographic information such as gender and race/ethnicity</li>
              <li>
                History of homelessness and housing (including current housing
                status and where and when services have been accessed)
              </li>
              <li>
                Self-reported medical history including any mental health and
                substance abuse issues
              </li>
              <li>Case notes and services</li>
              <li>Case manager’s contact information</li>
              <li>Income sources and amounts; and non-cash benefits</li>
              <li>Veteran status</li>
              <li>Disability status</li>
              <li>Household composition</li>
              <li>Emergency contact information</li>
              <li>Domestic violence history</li>
              <li>Photo (optional)</li>
            </ul>
            <p className="fs-3 fw-bold text-primary">
              How Your Personal Information Is Protected in the HMIS
            </p>
            <p>
              Your information is protected by passwords and encryption
              technology. Each HMIS user and participating organization must
              sign an agreement to maintain the security and privacy of your
              information. Each HMIS user or participating organization that
              violates the agreement may have access rights terminated and may
              be subject to further penalties.
            </p>
            <p className="fw-bold">How PPI May Be Shared and Disclosed</p>
            <p>
              Unless restricted by other laws, the information we collect can be
              shared and disclosed without your consent under the following
              circumstances:
            </p>
            <ul>
              <li>To provide or coordinate services.</li>
              <li>
                For payment or reimbursement of services for the participating
                organization.
              </li>
              <li>
                For administrative purposes, including but not limited to HMIS
                system administrator(s) and developer(s), and for legal, audit
                personnel, and oversight and management functions.
              </li>
              <li>For creating de-identified PPI.</li>
              <li>When required by law or for law enforcement purposes.</li>
              <li>To prevent a serious threat to health or safety.</li>
              <li>
                As authorized by law, for victims of abuse, neglect, or domestic
                violence.
              </li>
              <li>For academic research purposes.</li>
              <li>
                In a situation where you have requested access to your HMIS
                records through the Client Record Request process, and an agency
                will be providing you with those records.
              </li>
              <li>
                Other uses and disclosures of your PPI can be made with your
                written consent.
              </li>
            </ul>
            <p className="mt-3 fw-bold">
              Providing Your Consent for Sharing PPI in the HMIS
            </p>
            <p>
              Generally, to share your PPI in the OC HMIS, we must have your
              written consent. Exception:
            </p>
            <ul>
              <li>
                In a situation where we are gathering PPI from you during a
                phone screening, street outreach, or community access center
                sign-in, your verbal consent can be used to share your
                information in HMIS. If we obtain your verbal consent, you will
                be requested to provide written consent during your initial
                assessment. If you do not appear for your initial assessment,
                your information will remain in HMIS until you revoke your
                consent in writing.
              </li>
            </ul>
            <p className="text-danger">
              You have the right to receive services even if you do not consent
              to share your PPI in the OC HMIS.
            </p>
            <p className="fs-4 fw-bold text-primary">
              How to Revoke Your Consent for Sharing Information in the HMIS
            </p>
            <p>
              You may revoke your consent at any time. Your revocation must be
              provided either in writing or by completing the Revocation of
              Consent form. Upon receipt of your revocation, we will remove your
              PPI from the shared HMIS database and prevent further PPI from
              being added. The PPI that you previously authorized to be shared
              cannot be entirely removed from the HMIS database and will remain
              accessible to the limited number of organization(s) that provided
              you with direct services.
            </p>
            <p className="fw-bold">
              Your Rights to Your Information in the HMIS
            </p>
            <p className="mt-3">
              You have the right to receive the following, no later than five
              (5) business days of your written request:
            </p>
            <ul>
              <li>A correction of inaccurate or incomplete PPI;</li>
              <li>A copy of your consent form;</li>
              <li>A copy of the OC HMIS Privacy Notice;</li>
              <li>A copy of your HMIS records; and</li>
              <li>
                A current list of participating organizations that have access
                to your HMIS data.
              </li>
            </ul>
            <p>
              You can exercise these rights by making a written request to this
              organization.
            </p>
            <p className="fw-bold mt-3">
              Your Privacy Rights Regarding Your Information in the HMIS
            </p>
            <p>
              If you believe your privacy rights have been violated, you may
              send a written grievance to this organization. You will not be
              retaliated against for filing a grievance.
            </p>
            <p>
              If your grievance is not resolved to your satisfaction, you may
              send a written grievance appeal to the HMIS Lead, Orange County
              United Way
            </p>
            <p className="mt-3 fw-bold">Amendments to this Privacy Notice</p>
            <p>
              The policies in this notice may be amended at any time. These
              amendments may affect information obtained by this organization
              before the date of the change. Amendments regarding use or
              disclosure of PPI will apply to information (data) previously
              entered in HMIS, unless otherwise stated. All amendments to this
              privacy notice must be consistent with the requirements of the
              federal HMIS privacy standards. This organization must keep
              permanent documentation of all privacy notice amendments.
            </p>

            {/* <div className="text-center mb-3">
              <p className="text-primary fs-1 fw-bold">Aviso de Privacidad</p>
              <p className="fw-bold">
                Sistema de Información de Gestión para Personas sin Hogar del
                Condado de Orange (OC HMIS)
              </p>
              <p>
                ESTE AVISO DE PRIVACIDAD EXPLICA EN QUÉ CIRCUNSTANCIAS PODEMOS
                COMPARTIR Y DIVULGAR SU INFORMACIÓN DEL OC HMIS. ESTE AVISO
                TAMBIÉN EXPLICA SUS DERECHOS CON RESPECTO A SU INFORMACIÓN
                CONFIDENCIAL.
              </p>
              <p
                className="text-danger"
                style={{ textDecoration: "underline" }}
              >
                POR FAVOR LÉALO CUIDADOSAMENTE.
              </p>
            </div>
            <p>
              Nuestra organización recopila y comparte información sobre
              personas que acceden a nuestros servicios. La información se
              almacena de manera confidencial en una base de datos electrónica
              local llamada Sistema de Información de Gestión para Personas sin
              Hogar del Condado de Orange (OC HMIS). El OC HMIS registra de
              forma segura información (datos) sobre personas que acceden a
              servicios de vivienda y para personas sin hogar en el Condado de
              Orange.
            </p>
            <p>
              Solicitamos su permiso para compartir información personal
              confidencial que recopilamos sobre usted y su familia. Esta
              información confidencial se denomina Información Personal
              Protegida (PPI). Estamos obligados a proteger la privacidad de su
              PPI cumpliendo con las prácticas de privacidad descritas en este
              Aviso de Privacidad.
            </p>
            <p className="fw-bold mt-3">
              Por Qué Recopilamos y Compartimos Información
            </p>
            <p>
              La información que recopilamos y compartimos en el HMIS nos ayuda
              a coordinar de manera eficiente los servicios más efectivos para
              usted y su familia. Nos permite completar una admisión universal
              por persona; comprender mejor la falta de vivienda en su
              comunidad; y evaluar los tipos de recursos necesarios en su área
              local.
            </p>
            <p className="mt-3">
              Al recopilar su información para el HMIS, podemos generar informes
              estadísticos agregados solicitados por el Departamento de Vivienda
              y Desarrollo Urbano (HUD).
            </p>
            <p className="fw-bold mt-3">
              El Tipo de Información que Recopilamos y Compartimos en el HMIS
            </p>
            <ul>
              <li>
                Recopilamos y compartimos tanto PPI como información general
                obtenida durante su admisión y evaluación, que puede incluir,
                pero no se limita a:
              </li>
              <li>Nombre e información de contacto</li>
              <li>Número de seguro social</li>
              <li>Fecha de nacimiento</li>
              <li>Información demográfica como género y raza/etnicidad</li>
              <li>
                Historial de vivienda y situación de calle (incluyendo el estado
                actual de vivienda y dónde y cuándo se han accedido los
                servicios)
              </li>
              <li>
                Historial médico auto informado, incluidos problemas de salud
                mental y abuso de sustancias
              </li>
              <li>Notas del caso y servicios</li>
              <li>Información de contacto del administrador de casos</li>
              <li>Fuentes y montos de ingresos; y beneficios no monetarios</li>
              <li>Estado de veterano</li>
              <li>Estado de discapacidad</li>
              <li>&nbsp;Composición del hogar</li>
              <li>Información de contacto de emergencia</li>
              <li>&nbsp;Historial de violencia doméstica</li>
              <li>Foto (opcional)</li>
            </ul>
            <p className="fs-3 fw-bold text-primary">
              Cómo Se Protege Su Información Personal en el HMIS
            </p>
            <p>
              Su información está protegida mediante contraseñas y tecnología de
              encriptación. Cada usuario del HMIS y organización participante
              debe firmar un acuerdo para mantener la seguridad y privacidad de
              su información. Cualquier usuario del HMIS u organización
              participante que viole este acuerdo puede perder sus derechos de
              acceso y estar sujeto a sanciones adicionales.
            </p>
            <p className="fw-bold">
              Cómo Puede Compartirse y Divulgarse la PPI
            </p>
            <p>
              A menos que otras leyes lo restrinjan, la información que
              recopilamos puede ser compartida y divulgada en las siguientes
              circunstancias:
            </p>
            <ul>
              <li>Para proporcionar o coordinar servicios.</li>
              <li>
                Para el pago o reembolso de servicios por parte de la
                organización participante.
              </li>
              <li>
                Para fines administrativos, incluidos, entre otros, los
                administradores del sistema HMIS y desarrolladores, y para
                funciones legales, de auditoría, supervisión y gestión.
              </li>
              <li>Para crear PPI desidentificada.</li>
              <li>
                Cuando sea requerido por la ley o para fines de cumplimiento de
                la ley.
              </li>
              <li>Para prevenir una amenaza grave a la salud o seguridad.</li>
              <li>
                Según lo autorizado por la ley, para víctimas de abuso,
                negligencia o violencia doméstica.
              </li>
              <li>Para fines de investigación académica.</li>
              <li>
                Otros usos y divulgaciones de su PPI pueden realizarse con su
                consentimiento por escrito.
              </li>
            </ul>
            <p className="mt-3 fw-bold">
              Cómo Proporcionar Su Consentimiento para Compartir PPI en el HMIS
            </p>
            <p>
              Si elige compartir su PPI en el OC HMIS, debemos tener su
              consentimiento por escrito. Excepción: En una situación en la que
              recopilemos PPI durante una llamada telefónica, alcance en la
              calle o registro en un centro comunitario de acceso, se puede
              utilizar su consentimiento verbal para compartir su información en
              HMIS. Si obtenemos su consentimiento verbal, se le pedirá que
              proporcione consentimiento por escrito durante su evaluación
              inicial. Si no se presenta a su evaluación inicial, su información
              permanecerá en el HMIS hasta que revoque su consentimiento por
              escrito.
            </p>
            <p className="text-danger">
              Usted tiene derecho a recibir servicios incluso si no consiente
              compartir su PPI en el OC HMIS.
            </p>
            <p className="fs-4 fw-bold text-primary">
              Cómo Revocar Su Consentimiento para Compartir Información en el
              HMIS
            </p>
            <p>
              Puede revocar su consentimiento en cualquier momento. Su
              revocación debe proporcionarse por escrito o completando el
              formulario de Revocación de Consentimiento. Al recibir su
              revocación, eliminaremos su PPI de la base de datos compartida del
              HMIS y evitaremos que se agregue más PPI. La PPI que usted
              autorizó previamente a compartir no puede eliminarse completamente
              de la base de datos del HMIS y permanecerá accesible para el
              número limitado de organizaciones que le proporcionaron servicios
              directos.
            </p>
            <p className="fw-bold">
              Sus Derechos Sobre Su Información en el HMIS
            </p>
            <p className="mt-3">
              Usted tiene derecho a recibir lo siguiente, a más tardar cinco (5)
              días hábiles después de su solicitud por escrito:
            </p>
            <ul>
              <li>Una corrección de PPI inexacta o incompleta;</li>
              <li>Una copia de su formulario de consentimiento;</li>
              <li>Una copia del Aviso de Privacidad del OC HMIS;</li>
              <li>Una copia de sus registros en el HMIS; y</li>
              <li>
                Una lista actual de organizaciones participantes que tienen
                acceso a sus datos del HMIS.
              </li>
            </ul>
            <p>
              Puede ejercer estos derechos haciendo una solicitud por escrito a
              esta organización.
            </p>
            <p className="fw-bold mt-3">
              Sus Derechos de Privacidad Respecto a Su Información en el HMIS
            </p>
            <p>
              Si usted cree que se han violado sus derechos de privacidad, puede
              enviar una queja por escrito a esta organización. No se tomará
              represalia alguna contra usted por presentar una queja. Si su
              queja no se resuelve a su satisfacción, puede enviar una apelación
              escrita al Administrador del Sistema HMIS, 211 Orange County
              (211OC).
            </p>
            <p className="mt-3 fw-bold">Enmiendas a este Aviso de Privacidad</p>
            <p>
              Las políticas en este aviso pueden ser modificadas en cualquier
              momento. Estas enmiendas pueden afectar la información obtenida
              por esta organización antes de la fecha del cambio. Las enmiendas
              sobre el uso o divulgación de PPI se aplicarán a la información
              (datos) previamente ingresada en el HMIS, a menos que se indique
              lo contrario. Todas las enmiendas a este aviso de privacidad deben
              ser consistentes con los requisitos de los estándares federales de
              privacidad del HMIS. Esta organización debe mantener documentación
              permanente de todas las enmiendas al aviso de privacidad.
            </p> */}
          </div>
        </section>

        {/* <Leadership /> */}
        <section className="no-board-contact-sec">
          <Contact
            handleChange={handleChange}
            name={formState?.name}
            info={formState?.info}
            email={formState?.email}
            handleSubmit={handleSubmit}
            message={formState?.message}
            phone={formState?.phone}
            ApiDataGetmembers={ApiDataGetmembers}
          />
        </section>
        <Sponsor />
      </Layout>
    </>
  );
}

export default PrivacyNotice;
